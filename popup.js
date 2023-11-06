document.addEventListener("DOMContentLoaded", function () {
    const jokeOutput = document.getElementById('jokeOutput');
    const button = document.querySelector('button');

    const jokes = [
        "How can you tell if a person went to Harvard. Wait a few minutes and they will tell you.",
        "The Harvard Crimson",
        "My grief counselor died. He was so good, I don’t even care.",
        "I don’t have a carbon footprint. I just drive everywhere.",
        "What does my dad have in common with Nemo? They both can’t be found.",
        "Do you know the phrase “One man’s trash is another man’s treasure”? Wonderful saying, horrible way to find out that you were adopted.",
        "Want to know how you make any salad into a caesar salad? Stab it twenty-three times.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        "Give a man a match, and he’ll be warm for a few hours. Set him on fire, and he will be warm for the rest of his life.",
        "When does a joke become a dad joke? When it leaves you and never comes back.",
        "How many Harvard students does it take to change a light bulb? Just one. They hold the bulb and the world revolves around them.",
        "The doctor gave me one year to live, so I shot him with my gun. The judge gave me 15 years. Problem solved.",
        "What's red and bad for your teeth? A brick.",
        "New Harvard freshman from West Virginia is lost on campus. He goes to an upperclassman and says 'Excuse me, can you tell me where the library's at?' Upperclassman says, 'You are a Harvard student now! Don’t end your sentences with prepositions! 'Freshman says “Sorry. Can you tell me where the library’s at, asshole?",
        "I have a stepladder because my real ladder left when I was 5.",
        "They laughed at my crayon drawing. I laughed at their chalk outline.",
        "I threw a boomerang a few years ago. I now live in constant fear.",
        "Why can’t Michael Jackson go within 500 meters of a school? Because he’s dead.",
        "What was David Bowies' last hit? Probably heroine.",
        "What do you call fake spaghetti? An impasta!",
        "I hope Death is a woman. That way it will never come for me.",
        "What do you see when the Pillsbury Dough Boy bends over? Doughnuts.",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What do you call a teenage boy who doesn't masturbate. A liar.",
        "A Harvard man and a Yale man encounter one another at a urinal. The Harvard man finishes his business and prepares to walk out of the bathroom. The Yale man sniffs, 'At YALE, we wash our hands after we utilize the facilities.' The Harvard Man grins and says, 'At HARVARD, we don’t piss on our fingers.'"
    ];

    let currentJokeIndex = 0; // Keep track of the current joke

    function typeText(element, text, interval, callback) {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            element.textContent += text[currentIndex];
            currentIndex++;

            if (currentIndex >= text.length) {
                clearInterval(typingInterval);
                if (callback) callback();
            }
        }, interval);
    }

    button.addEventListener('click', () => {
        // Disable the button
        button.disabled = true;

        jokeOutput.textContent = '';
        const currentJoke = jokes[currentJokeIndex]; // Get the current joke
        typeText(jokeOutput, currentJoke, 35, () => {
            // Enable the button again after the typing animation completes
            button.disabled = false;
        });

        // Increment the joke index, and wrap around if it goes past the end of the array
        currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
    });
});
