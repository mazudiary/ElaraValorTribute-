// Accepted password answers (case insensitive)
        const acceptedPasswords = [
            "book fair",
            "boi mela",
            "omer ekushey boi mela",
            "omer ekushey",
            "boimela",
            "bok mela"
        ];

        function checkPassword() {
            const input = document.getElementById('passwordInput').value.trim().toLowerCase();
            const errorEl = document.getElementById('passwordError');
            if (acceptedPasswords.some(pw => pw === input)) {
                errorEl.textContent = "";
            showPage(2);
            } else {
                errorEl.textContent = "Oops! That's not the correct password. Try again.";
            }
        }
    

        const page2Steps = [
        "Do you know today's date?",
        "8 JUNE 2025",
        "What day is it today?",
        "image"
        ];
        let page2Step = 0;

        function page2Next() {
            const textEl = document.getElementById('page2TextContent');
            const imageEl = document.getElementById('page2Image');

            page2Step++;

            if (page2Step < page2Steps.length) {
                if (page2Steps[page2Step] === "image") {
                    textEl.style.display = "none";
                    imageEl.style.display = "block";
                    imageEl.src = "best_friendship_day_image.png"; // Replace with your image path
                    imageEl.alt = "Today is Best Friends Day!";
                    } else {
                    imageEl.style.display = "none";
                    textEl.style.display = "block";
                    textEl.textContent = page2Steps[page2Step];
                }
            } else {
                showPage(3);
            }
        }



    // Show the specified page, hide others
        function showPage(num) {
            for (let i = 1; i <= 3; i++) {
                document.getElementById('page' + i).classList.toggle('active', i === num);
            }
        }
    
        function predictFuture() {
            const messages = [
                "You will inspire someone just by being you.",
                "Stars will align in your favor.",
                "You and your finest friend will laugh endlessly under moonlight.",
                "The universe will echo your kindness.",
                "Your dreams will glow brighter than constellations."
            ];
            const oracle = document.getElementById('oracleText');
            oracle.innerText = messages[Math.floor(Math.random() * messages.length)];
        }

        // Fireflies
        const fireflies = document.getElementById('fireflies');
        for (let i = 0; i < 30; i++) {
            const dot = document.createElement('div');
            dot.className = 'firefly';
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = Math.random() * 100 + '%';
            dot.style.animationDuration = (1 + Math.random() * 3) + 's';
            fireflies.appendChild(dot);
        }

        // Move fireflies
        setInterval(() => {
            const fireflies = document.querySelectorAll('.firefly');
            fireflies.forEach(firefly => {
            const currentLeft = parseFloat(firefly.style.left);
            const currentTop = parseFloat(firefly.style.top);
            const newLeft = currentLeft + (Math.random() - 0.5) * 10;
            const newTop = currentTop + (Math.random() - 0.5) * 10;
            firefly.style.left = Math.max(0, Math.min(100, newLeft)) + '%';
            firefly.style.top = Math.max(0, Math.min(100, newTop)) + '%';
            });
        }, 1000);
    
    // Affirmation Messages
        const affirmationMessages = {
            "Radiant": "You brighten every space you enter, Elara. Like a lighthouse for souls.",
            "Courageous": "You face life with a strength that makes even storms pause.",
            "Wise": "Your words carry constellations of insight.",
            "Kind": "You are gentle without being weak and strong without ever being harsh.",
            "Mystic": "There’s a depth in you that feels like magic wrapped in mystery.",
            "Stellar": "You’re made of the same things as stars, luminous and legendary.",
            "Fierce": "When you believe in something, the universe listens.",
            "Gentle": "Your softness is your power. The world is better because of it."
        };

        document.querySelectorAll('.affirmation-cloud span').forEach(span => {
            span.addEventListener('click', () => {
            const word = span.textContent.trim();
            const msg = affirmationMessages[word] || "You are unforgettable.";
            showPopupWithTyping(msg);
            });
        });
        
    
        function showPopupWithTyping(message, title = '') {
    const modal = document.getElementById('popupModal');
    const messageEl = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.close-btn');

    modal.style.display = 'flex';
    messageEl.innerHTML = ''; // Clear previous
    if (title) {
      messageEl.innerHTML = `<strong style="font-size:1.2em; display:block; margin-bottom:10px;">${title}</strong>`;
    }

    let i = 0;
    const plainText = message.replace(/<br\s*\/?>/g, '\n'); // Replace <br> with \n for typing
    const outputHTML = message;

    function type() {
        if (i < plainText.length) {
            const current = plainText.slice(0, i + 1)
                                     .replace(/\n/g, '<br>'); // Convert back to HTML line breaks
            messageEl.innerHTML = (title ? `<strong style="font-size:1.2em; display:block; margin-bottom:10px;">${title}</strong>` : '') + current;
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}


        function closePopup() {
            document.getElementById('popupModal').style.display = 'none';
        }

    // Function to show the surprise letter
function showSurpriseLetter() {
    const letter = "Dear Bestfriend,<br><br>No matter how many souls cross my path or how much laughter I share with others, no one, absolutely no one could ever take your place. You arent just a friend, youre a piece of my soul stitched into this lifetime.<br><br>You were my constant when everything else changed. Youre my comfort in chaos, my clarity in confusion, my light when I forget how to shine. You were, are and will always be irreplaceable, a sacred part of my story.<br><br>Youve a home in my heart, not just for now but for always. 💫";
    showPopupWithTyping(letter, "A Special Letter for You");
}