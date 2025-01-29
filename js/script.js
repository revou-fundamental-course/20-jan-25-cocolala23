const DISEASES = {
    UNDERWEIGHT: [
        'Anemia',
        'Osteoporosis',
        'Immunodeficiency',
        'Malnutrisi'
    ],
    NORMAL: [
        'Umumnya tidak ada risiko penyakit terkait berat badan'
    ],
    OVERWEIGHT: [
        'Diabetes Tipe 2',
        'Hipertensi',
        'Penyakit Jantung Koroner',
        'Sleep Apnea'
    ],
    OBESITY: [
        'Diabetes Tipe 2',
        'Hipertensi',
        'Penyakit Jantung',
        'Kanker',
        'Osteoarthritis'
    ],
};

const BMI_CATEGORIES = {
    UNDERWEIGHT: 'Kekurangan berat badan',
    NORMAL: 'Normal (ideal)',
    OVERWEIGHT: 'Kelebihan berat badan',
    OBESITY: 'Kegemukan (Obesitas)'
};

document.getElementById("calculateBMI").addEventListener("click", function(event) {
    event.preventDefault();

    const beratBadan = parseFloat(document.getElementById("input-berat-badan").value);
    const tinggiBadan = parseFloat(document.getElementById("input-tinggi-badan").value);
    const jenisKelamin = document.querySelector('input[name="gender"]:checked')?.value;
    
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0 || !jenisKelamin) {
        alert("Silakan isi semua kolom dengan benar!");
        return;
    }
    
    const tinggiMeter = tinggiBadan / 100;
    const bmi = (beratBadan / (tinggiMeter * tinggiMeter)).toFixed(2);

    document.getElementById("result-BMI").textContent = `BMI Anda: ${bmi}`;

    let category = "";
    let recommendation = "";
    let diseases = [];

    if (jenisKelamin === "pria") {
        if (bmi < 18.5) {
            category = BMI_CATEGORIES.UNDERWEIGHT;
            recommendation = "Tingkatkan asupan protein dan kalori serta lakukan latihan beban untuk meningkatkan massa otot.";
            diseases = DISEASES.UNDERWEIGHT;
        } else if (bmi >= 18.5 && bmi < 25) {
            category = BMI_CATEGORIES.NORMAL;
            recommendation = "Berat badan Anda ideal! Pertahankan pola makan seimbang dan tetap aktif secara fisik.";
            diseases = DISEASES.NORMAL;
        } else if (bmi >= 25 && bmi < 30) {
            category = BMI_CATEGORIES.OVERWEIGHT;
            recommendation = "Kontrol pola makan dan tingkatkan olahraga kardiovaskular untuk mencapai berat badan ideal.";
            diseases = DISEASES.OVERWEIGHT;
        } else {
            category = BMI_CATEGORIES.OBESITY;
            recommendation = "Atur pola makan sehat, tingkatkan aktivitas fisik, dan konsultasikan dengan dokter atau ahli gizi.";
            diseases = DISEASES.OBESITY;
        }
    } else if (jenisKelamin === "wanita") {
        if (bmi < 18.5) {
            category = BMI_CATEGORIES.UNDERWEIGHT;
            recommendation = "Tingkatkan asupan nutrisi dengan makanan sehat yang kaya kalori dan protein, serta lakukan latihan kekuatan.";
            diseases = DISEASES.UNDERWEIGHT;
        } else if (bmi >= 18.5 && bmi < 24.5) {
            category = BMI_CATEGORIES.NORMAL;
            recommendation = "Berat badan Anda ideal! Pertahankan pola makan seimbang dan tetap aktif secara fisik.";
            diseases = DISEASES.NORMAL;
        } else if (bmi >= 24.5 && bmi < 29.5) {
            category = BMI_CATEGORIES.OVERWEIGHT;
            recommendation = "Kontrol asupan makanan, kurangi gula dan lemak jenuh, serta tingkatkan aktivitas fisik.";
            diseases = DISEASES.OVERWEIGHT;
        } else {
            category = BMI_CATEGORIES.OBESITY;
            recommendation = "Terapkan pola makan sehat, tingkatkan olahraga, dan konsultasikan dengan dokter atau ahli gizi.";
            diseases = DISEASES.OBESITY;
        }
    }

    document.getElementById("bmiCategory").textContent = `Kategori: ${category}`;
    document.getElementById("recommendation").textContent = `Rekomendasi: ${recommendation}`;
    
    const diseaseListElement = document.getElementById("diseases");
    diseaseListElement.innerHTML = `<strong>Penyakit yang mungkin muncul:</strong> <ul>${diseases.map(disease => `<li>${disease}</li>`).join('')}</ul>`;
});
