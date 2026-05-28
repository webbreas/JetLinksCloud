"""Normalize pain-02..05 to pain-01 canvas size and visual icon scale."""
from pathlib import Path

from PIL import Image

ASSETS = Path(__file__).resolve().parents[1] / "src/assets/AI/tongdian"
REF = ASSETS / "pain-01.png"


def content_bbox(img: Image.Image) -> tuple[int, int, int, int]:
    alpha = img.convert("RGBA").split()[3]
    bbox = alpha.getbbox()
    if bbox is None:
        return (0, 0, img.width, img.height)
    return bbox


def normalize_to_ref(ref_path: Path, targets: list[Path]) -> None:
    ref = Image.open(ref_path).convert("RGBA")
    ref_w, ref_h = ref.size
    ref_bbox = content_bbox(ref)
    ref_content_h = ref_bbox[3] - ref_bbox[1]
    ref_cx = (ref_bbox[0] + ref_bbox[2]) / 2
    ref_cy = (ref_bbox[1] + ref_bbox[3]) / 2

    for path in targets:
        im = Image.open(path).convert("RGBA")
        bbox = content_bbox(im)
        content = im.crop(bbox)
        cw, ch = content.size
        scale = ref_content_h / ch
        new_w = max(1, int(cw * scale))
        new_h = max(1, int(ch * scale))
        content = content.resize((new_w, new_h), Image.Resampling.LANCZOS)

        canvas = Image.new("RGBA", (ref_w, ref_h), (0, 0, 0, 0))
        x = int(ref_cx - new_w / 2)
        y = int(ref_cy - new_h / 2)
        canvas.paste(content, (x, y), content)
        canvas.save(path, "PNG")
        print(f"{path.name}: -> {ref_w}x{ref_h}, content {new_w}x{new_h}")


if __name__ == "__main__":
    targets = [ASSETS / f"pain-0{i}.png" for i in range(2, 6)]
    normalize_to_ref(REF, targets)
    print("done (pain-01 unchanged)")
