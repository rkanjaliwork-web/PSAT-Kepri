import pandas as pd
import glob
import os

# daftar CSV kamu (pastikan nama file sesuai)
csv_files = {
    "apel": "INVENTARIS DAFTAR OPTK - APEL.csv",
    "anggur": "INVENTARIS DAFTAR OPTK - ANGGUR.csv",
    "pir": "INVENTARIS DAFTAR OPTK - PIR.csv",
    "bawang_bombay": "INVENTARIS DAFTAR OPTK - BAWANG BOMBAY.csv",
    "bawang_putih": "INVENTARIS DAFTAR OPTK - BAWANG PUTIH.csv",
}

# bikin folder output kalau belum ada
os.makedirs("html_rows", exist_ok=True)

for nama, file in csv_files.items():
    try:
        df = pd.read_csv(file)

        rows = ""
        for _, row in df.iterrows():
            # otomatis ambil semua kolom yang ada
            cols = "".join([f"<td>{row[c]}</td>" for c in df.columns])
            rows += f"<tr>{cols}</tr>\n"

        out_file = f"html_rows/{nama}_rows.html"
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(rows)

        print(f"✅ Selesai: {out_file}")

    except Exception as e:
        print(f"⚠️ Gagal proses {file}: {e}")
