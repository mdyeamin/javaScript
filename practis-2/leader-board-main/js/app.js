// ১. Top Players2022 নাম একটা লেখা আছে। অথবা Top Blogs লেখা আছে। এই দুইটাকে দুইটা ID দাও। HTML চেইঞ্জ করে ID সেট করো। তারপর জাভাস্ক্রিপ্ট দিয়েই সেই এলিমেন্ট খুঁজে বের করে তার টেক্সট এর কালার চেইঞ্জ করে ফেলো। 

//top player

const topPlayer = document.getElementById('top-player');
topPlayer.style.color = '562eff'


// ২. জাভাস্ক্রিপ্ট দিয়ে player ক্লাস এর যতগুলা div আছে সবগুলাকে যেকোন একটা ব্যাকগ্রাউন্ড কালার দাও। তোমার ইচ্ছামতো যেকোন একটা ব্যাকগ্রাউন্ড কালার দিতে হবে। তবে কালারটা hex কালার না দিয়ে। rgba কালার দাও। যদি rgba বুঝতে না পারো। তাহলে গুগলে সার্চ দিয়ে একটা rgba কালার বের করে তারপর সেই কালার দাও।  

// all player
const allPlayer = document.getElementsByClassName('player');

for (const player of allPlayer) {
    player.style.backgroundColor = 'rgba(246, 237, 237, 0.1)';

}


// ৩. ওয়েবসাইট এর নিচে একটা ul list যোগ করো। সেখানে তোমার ইচ্ছামতো তিনটা আইটেম যোগ করো। তারপর ul এর নিচে একটা বাটন যোগ করো। এখন তোমার কাজ হবে। বাটনে যতবার ক্লিক করবে। ul এর মধ্যে নতুন একটা লিস্ট আইটেম যোগ হবে।


// ul item create
document.getElementById('new-item').addEventListener('click', function () {
    // create li and innerText genarate
    const createLI = document.createElement('li');
    createLI.innerText = 'im New';


    const parantUL = document.getElementById('parant-ul');
    parantUL.appendChild(createLI);
})

// ৪. এখন ul এর নিচে একটা ইনপুট ফিল্ড আর একটা বাটন যোগ করো। ইনপুট ফিল্ড এ শুরুতে মান হবে শূন্য (০)। তারপর ইনপুট ফিল্ডের পাশের নতুন বাটন এ যতবার প্রেস করবে ততবার এক এক করে ইনপুট ফিল্ড এর মান এক এক করে বাড়বে। 
// 4 এবং 5 দুইটা একসাথে।
// ৫. (চ্যালেঞ্জিং ওয়ান)উপরে বাটনে দুইটা শর্ত আছে। সেটা হচ্ছে সংখ্যা বাড়লেও সেটা হবে সর্বোচ্চ ৫। অর্থাৎ ০ থেকে এক এক করে বেড়ে বেড়ে পাঁচ পর্যন্ত হতে পারে। তার উপরে আর বাড়বে না। এবং ৫ হয়ে গেলে বাটনটা ডিজেবল হয়ে যাবে।

// plus
const button = document.getElementById('plus');
button.addEventListener('click', function () {
    const inputValue = document.getElementById('input-value');

    const inputValueText = inputValue.value;
    if (inputValueText == 5) {
        // button.setAttrebote('disabled')
        document.getElementById('plus').disabled = true;

        return inputValueText;
    }

    inputValue.value = parseInt(inputValueText) + 1;
});
// minus
document.getElementById('minus').addEventListener('click', function () {

    const inputValue = document.getElementById('input-value');
    const inputValueText = inputValue.value;
    if (inputValueText == 0) {
        document.getElementById('minus').disabled = true;

        return inputValueText;

    }

    inputValue.value = parseInt(inputValueText) - 1;
})
