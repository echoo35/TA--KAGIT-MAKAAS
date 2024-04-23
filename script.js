// Kullanıcı ve rakip seçimlerini tutmak için değişkenler.
var you; // Kullanıcının seçimini tutacak değişken.
var yourScore = 0; // Kullanıcının skorunu tutacak değişken.
var opponent; // Rakibin seçimini tutacak değişken.
var opponentScore = 0; // Rakibin skorunu tutacak değişken.

// Seçenekler: Taş, kağıt, makas.
var choices = ["rock", "paper", "scissors"];

// Sayfa yüklendiğinde çalışacak olan fonksiyon.
window.onload = function() {
    // Seçeneklerin her biri için bir resim oluşturulur ve tıklanabilir hale getirilir.
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i]; // Her seçeneğin ID'si atanır.
        choice.src = choices[i] + ".png"; // Her seçeneğin resmi atanır.
        choice.addEventListener("click", selectChoice); // Tıklama olayı atanır.
        document.getElementById("choices").append(choice); // Seçeneklerin olduğu alana eklenir.
    }
}

// Kullanıcının seçimini işleyen fonksiyon.
function selectChoice() {
    // Kullanıcının seçimi belirlenir ve resim alanına eklenir.
    you = this.id; // Kullanıcının seçimi ID'sinden alınır.
    document.getElementById("your-choice").src = you + ".png"; // Kullanıcının seçimi resim alanına eklenir.

    // Rakip için rastgele bir seçim yapılır ve resim alanına eklenir.
    opponent = choices[Math.floor(Math.random() * 3)]; // Rastgele rakip seçimi yapılır.
    document.getElementById("opponent-choice").src = opponent + ".png"; // Rakip seçimi resim alanına eklenir.

    // Kazanan belirlenir ve skorlar güncellenir.
    if (you == opponent) { // Berabere durumu kontrol edilir.
        yourScore += 1; // Kullanıcının skoru arttırılır.
        opponentScore += 1; // Rakibin skoru arttırılır.
    } else { // Berabere değilse:
        if (you == "rock") { // Kullanıcı taşı seçmişse:
            if (opponent == "scissors") { // Rakip makası seçmişse:
                yourScore += 1; // Kullanıcının skoru arttırılır.
            } else if (opponent == "paper") { // Rakip kağıdı seçmişse:
                opponentScore += 1; // Rakibin skoru arttırılır.
            }
        } else if (you == "scissors") { // Kullanıcı makası seçmişse:
            if (opponent == "paper") { // Rakip kağıdı seçmişse:
                yourScore += 1; // Kullanıcının skoru arttırılır.
            } else if (opponent == "rock") { // Rakip taşı seçmişse:
                opponentScore += 1; // Rakibin skoru arttırılır.
            }
        } else if (you == "paper") { // Kullanıcı kağıdı seçmişse:
            if (opponent == "rock") { // Rakip taşı seçmişse:
                yourScore += 1; // Kullanıcının skoru arttırılır.
            } else if (opponent == "scissors") { // Rakip makası seçmişse:
                opponentScore += 1; // Rakibin skoru arttırılır.
            }
        }
    }

    // Skorlar HTML içindeki ilgili alanlara yazdırılır.
    document.getElementById("your-score").innerText = yourScore; // Kullanıcının skoru yazdırılır.
    document.getElementById("opponent-score").innerText = opponentScore; // Rakibin skoru yazdırılır.
}
