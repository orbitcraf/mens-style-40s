"""Keep originals, back up exact bytes, and create high-quality responsive WebP files."""
from pathlib import Path
from hashlib import sha256
from io import BytesIO
import json
import zipfile
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
images = root / 'public/images'
backup = root / 'backups/images-2026-10-11.zip'
manifest = root / 'backups/images-2026-10-11.json'
files = sorted(images.glob('*.webp'))
backup.parent.mkdir(exist_ok=True)
records = [{'file': p.name, 'bytes': p.stat().st_size, 'sha256': sha256(p.read_bytes()).hexdigest()} for p in files]
if not backup.exists():
    with zipfile.ZipFile(backup, 'x', compression=zipfile.ZIP_STORED) as archive:
        for path in files:
            archive.write(path, path.name)
    manifest.write_text(json.dumps(records, indent=2), encoding='utf-8')
with zipfile.ZipFile(backup) as archive:
    expected = json.loads(manifest.read_text(encoding='utf-8'))
    for record in expected:
        assert sha256(archive.read(record['file'])).hexdigest() == record['sha256']
        assert sha256((images / record['file']).read_bytes()).hexdigest() == record['sha256'], 'Original changed'

variants = images / 'responsive'
variants.mkdir(exist_ok=True)
totals = {width: 0 for width in [320, 480, 640]}
for path in files:
    source = Image.open(path).convert('RGB')
    for width in totals:
        resized = ImageOps.contain(source, (width, round(source.height * width / source.width)), Image.Resampling.LANCZOS)
        target = variants / f'{path.stem}-{width}.webp'
        resized.save(target, 'WEBP', quality=86, method=6)
        with Image.open(target) as check:
            assert check.size == resized.size
            check.verify()
        totals[width] += target.stat().st_size
report = {'originalCount': len(files), 'originalBytes': sum(r['bytes'] for r in records), 'variantBytes': totals, 'quality': 86, 'originalsUnchanged': True}
(root / 'IMAGE_OPTIMIZATION.json').write_text(json.dumps(report, indent=2)+'\n', encoding='utf-8')
print(json.dumps(report))
