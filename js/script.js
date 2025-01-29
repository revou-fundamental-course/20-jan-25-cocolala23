const BMI_CATEGORIES = {
    UNDERWEIGHT: 'Kekurangan berat badan',
    NORMAL: 'Normal (ideal)',
    OVERWEIGHT: 'Kelebihan berat badan',
    OBESITY: 'Kegemukan (Obesitas)',
};

document.getElementById("calculateBMI").addEventListener("click", function() {
    const beratBadan = parseFloat(document.getElementById("input-berat-badan").value);
    const tinggiBadan = parseFloat(document.getElementById("input-tinggi-badan").value);
    const Usia = parseFloat(document.getElementById ("input-suai").value);

    if (!beratBadan || !tinggiBadan) {
        alert("Silakan isi semua kolom dengan benar!");
        return;
    }

    const tinggiMeter = tinggiBadan / 100;
    const bmi = (beratBadan / (tinggiMeter * tinggiMeter)).toFixed(2);

    document.getElementById("result-BMI").textContent = bmi;

    let category = "";
    if (bmi < 18.5) category = "Kekurangan berat badan";
    else if (bmi >= 18.5 && bmi < 24.9) category = "Normal";
    else if (bmi >= 25 && bmi < 29.9) category = "Kelebihan berat badan";
    else category = "Obesitas";

    document.getElementById("bmiCategory").textContent = `Kategori: ${category}`;
});