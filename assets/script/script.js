const questions = [
    "Apakah member ini berasal dari generasi pertama JKT48?",
    "Apakah member ini merupakan seorang center dalam lagu JKT48?",
    "Apakah member ini pernah tampil dalam tim J?",
    "Apakah member ini pernah menjadi bagian dari tim KIII?",
    "Apakah member ini pernah bergabung dengan tim T?",
    "Apakah member ini terkenal karena kemampuan menarinya?",
    "Apakah member ini sering tampil di variety show JKT48?",
    "Apakah member ini memiliki suara yang khas?",
    "Apakah member ini pernah memenangkan senbatsu sousenkyo?",
    "Apakah member ini memiliki rambut panjang?",
    "Apakah member ini sering muncul di iklan atau endorsement?",
    "Apakah member ini pernah merilis single solo?",
    "Apakah member ini dikenal memiliki kepribadian yang ceria?",
    "Apakah member ini berasal dari luar Jakarta?",
    "Apakah member ini memiliki lebih dari satu posisi center?",
    "Apakah member ini terkenal karena aktingnya di drama atau film?",
    "Apakah member ini memiliki banyak pengikut di media sosial?",
    "Apakah member ini pernah menjadi kapten tim?",
    "Apakah member ini pernah menjadi bagian dari sub-unit JKT48?",
    "Apakah member ini memiliki warna favorit yang sering disebut di profilnya?",
    "Apakah member ini dikenal pandai berbicara di depan publik?",
    "Apakah member ini memiliki hubungan dekat dengan member lain yang terkenal?",
    "Apakah member ini pernah menjadi senbatsu dalam lagu versi Jepang?",
    "Apakah member ini sering mendapatkan posisi center dalam lagu coupling?",
    "Apakah member ini dikenal sebagai MC yang berbakat?",
    "Apakah member ini pernah merilis photobook?",
    "Apakah member ini dikenal karena gaya fashionnya?",
    "Apakah member ini memiliki bakat menggambar atau seni lainnya?",
    "Apakah member ini sering disebut-sebut oleh fans sebagai bias utama?",
    "Apakah member ini pernah tampil di teater JKT48 dengan peran utama?",
    "Apakah member ini memiliki hewan peliharaan yang terkenal di kalangan fans?",
    "Apakah member ini sering aktif dalam konten live streaming?",
    "Apakah member ini memiliki ciri khas berupa aksesori tertentu?",
    "Apakah member ini pernah menempuh pendidikan di luar negeri?",
    "Apakah member ini fasih berbicara dalam bahasa Jepang?",
    "Apakah member ini sering meng-cover lagu di media sosial?",
    "Apakah member ini pernah menjadi duta atau perwakilan acara tertentu?",
    "Apakah member ini memiliki tinggi badan di atas rata-rata member lainnya?",
    "Apakah member ini dikenal karena sering membuat fans tertawa?",
    "Apakah member ini pernah memenangkan penghargaan di luar JKT48?",
    "Apakah member ini pernah mengikuti audisi untuk grup idol lainnya?",
    "Apakah member ini memiliki lagu favorit dari JKT48 yang sering disebut di wawancara?",
    "Apakah member ini sering tampil dalam acara musik televisi?",
    "Apakah member ini pernah menjadi bagian dari Janken Senbatsu?",
    "Apakah member ini memiliki hobi unik yang sering dibahas oleh fans?",
    "Apakah member ini terkenal karena interaksinya dengan fans di handshake event?",
    "Apakah member ini pernah tampil dalam konser internasional bersama JKT48?",
    "Apakah member ini sering mengunggah vlog atau konten YouTube?",
    "Apakah member ini memiliki warna suara yang cocok untuk lagu balada?",
    "Apakah member ini pernah menjadi bagian dari project kolaborasi lintas grup AKB48?",
    "Apakah member ini dikenal karena memiliki senyuman yang memikat?",
    "Apakah member ini pernah berperan dalam video klip artis lain di luar JKT48?",
    "Apakah member ini memiliki gaya rambut yang sering berubah?",
    "Apakah member ini memiliki hubungan dengan dunia modeling?",
    "Apakah member ini pernah menjadi bagian dari unit spesial dalam konser JKT48?",
    "Apakah member ini memiliki suara yang cocok untuk lagu upbeat?",
    "Apakah member ini dikenal sering membuat konten komedi di media sosial?",
    "Apakah member ini pernah menjadi brand ambassador produk tertentu?",
    "Apakah member ini sering tampil di acara radio?",
    "Apakah member ini memiliki saudara yang juga dikenal di dunia hiburan?",
    "Apakah member ini pernah bergabung dalam audisi global 48 Group?",
    "Apakah member ini memiliki skill bahasa asing selain Jepang dan Inggris?",
    "Apakah member ini pernah menjadi bagian dari penampilan shuffle team?",
    "Apakah member ini dikenal karena interaksinya dengan fans melalui fanservice?",
    "Apakah member ini memiliki ciri khas gaya berbicara yang unik?",
    "Apakah member ini pernah menjadi bagian dari lagu spesial yang hanya dinyanyikan beberapa member?",
    "Apakah member ini sering menjadi sorotan dalam konser besar JKT48?",
    "Apakah member ini memiliki hubungan dengan seni tari tradisional?",
    "Apakah member ini pernah membuat lagu atau karya original?",
    "Apakah member ini sering tampil dalam event cosplay atau tema tertentu?",
    "Apakah member ini memiliki warna rambut yang jarang dimiliki oleh member lain?",
    "Apakah member ini pernah mengikuti kompetisi bernyanyi di luar JKT48?",
    "Apakah member ini memiliki kebiasaan unik yang sering dibahas di variety show?",
    "Apakah member ini pernah menjadi bagian dari lagu yang direkam di luar negeri?",
    "Apakah member ini memiliki ketertarikan dengan dunia esports?",
    "Apakah member ini dikenal sering memberikan motivasi kepada fans?",
    "Apakah member ini memiliki pengalaman menarik di backstage konser JKT48?",
    "Apakah member ini memiliki hubungan erat dengan member senior?",
    "Apakah member ini sering tampil dengan gaya busana yang tidak biasa?",
    "Apakah member ini pernah menyanyikan lagu JKT48 dalam versi akustik?",
    "Apakah member ini dikenal karena ekspresi wajahnya yang lucu?",
    "Apakah member ini pernah bergabung dalam lagu tema anime atau film?",
    "Apakah member ini pernah memimpin diskusi atau presentasi di luar panggung?",
    "Apakah member ini memiliki koleksi barang yang unik atau menarik?",
    "Apakah member ini sering berkolaborasi dengan artis atau musisi lain?",
    "Apakah member ini memiliki skill memasak yang sering dipamerkan?",
    "Apakah member ini pernah tampil di luar negeri bersama grup 48 lain?",
    "Apakah member ini memiliki cerita inspiratif di balik kariernya di JKT48?",
    "Apakah member ini sering mengadakan fan meeting atau event spesial untuk fans?",
    "Apakah member ini dikenal dengan sebutan atau julukan tertentu dari fans?",
    "Apakah member ini memiliki ketertarikan dengan dunia fotografi?",
    "Apakah member ini pernah menjadi tamu di podcast atau wawancara online?",
    "Apakah member ini dikenal sebagai seorang prankster di antara member lain?",
    "Apakah member ini pernah memiliki peran penting dalam lagu tema ulang tahun grup?",
    "Apakah member ini memiliki karya seni seperti lukisan atau desain grafis?",
    "Apakah member ini memiliki hubungan dengan dunia fashion, seperti mendesain pakaian?",
    "Apakah member ini pernah menjadi mentor untuk member generasi berikutnya?",
    "Apakah member ini pernah tampil di acara televisi internasional?",
    "Apakah member ini sering memberikan tips kesehatan atau kecantikan kepada fans?",
    "Apakah member ini pernah menjadi vokalis utama dalam lagu grup?",
    "Apakah member ini sering tampil dalam lagu yang memiliki tema budaya lokal?",
    "Apakah member ini pernah mencatat sejarah atau rekor di JKT48?"
];

let members = [];
let currentQuestionIndex = 0;
let filteredMembers = [];
let currentGeneration = null;

// Random question untuk mempernyata permainan :)
function randomQuestion(questionList) {
    if (!Array.isArray(questionList) || questionList.length === 0) {
        throw new Error("Daftar pertanyaan tidak valid atau kosong.");
    }
    const randomIndex = Math.floor(Math.random() * questionList.length);
    return questionList[randomIndex];
}

function randomQuestionDiv() {
    const randomQ = randomQuestion(questions);
    document.getElementById("question").innerText = randomQ; // Pertanyaan random.
    currentQuestionIndex++;
    document.getElementById("answers").innerHTML = `
        <button class="answer" onclick="randomQuestions()">Ya</button>
        <button class="answer" onclick="randomQuestions()">Tidak</button>
        <button class="answer" onclick="randomQuestions()">Mungkin</button>
        <button class="answer" onclick="randomQuestions()">Tidak Tahu</button>`;
    showPossibleMembers();    
}

function randomQuestions() {
    // askInitialLetter
    const a = Math.floor(Math.random() * 10) + 1;
    if (a > 5) {
        randomQuestionDiv();
    } else {
        askInitialLetter();
    }
}

function loadData() {
  fetch(
    "https://raw.githubusercontent.com/FrenzY8/JKT48-Member/refs/heads/main/AllMember.json"
  )
    .then((response) => response.json())
    .then((data) => {
      members = data;
      filteredMembers = members;
      askQuestion();
    });
}

function askQuestion() {
  if (filteredMembers.length === 1) {
    showResult(filteredMembers[0]);
    return;
  }

  const questions = [
    { question: "Apakah member sudah lulus?", key: "graduated" },
    { question: "Apa dia masih Trainee?", key: "trainee" },
  ];

  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
  } else {
    showResult(filteredMembers[0]);
  }
}

function answer(response) {
  const question = [{ key: "graduated" }, { key: "trainee" }][
    currentQuestionIndex
  ];

  const value = response === "yes" ? true : false;
  filteredMembers = filteredMembers.filter(
    (member) => member[question.key] === value
  );

  if (question.key === "trainee" && value === true) {
    askGenerationQuestion(); // 12 or 13?
    return;
  } else {
    if (question.key === "trainee" && value === false) {
      askGenAll();
      return;
    }
  }

  if (question.key === "graduated" && value === true) {
    // randomQuestionDiv();
    askGenGrad();
    return;
  }

  currentQuestionIndex++;
  askQuestion();
  showPossibleMembers();
}
function askGenAll() {
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  document.getElementById("question").innerText =
    "Apakah member ini dari generasi ke-" + randomNumber;
  currentQuestionIndex++;
  document.getElementById("answers").innerHTML = `
            <button class="answer" onclick="filterGenerationAll(${randomNumber})">Ya</button>
            <button class="answer" onclick="filterGenerationAll()">Tidak</button>
        `;
  showPossibleMembers();
}
function askGenGrad() {
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  document.getElementById("question").innerText =
    "Apakah member ini dari generasi ke-" + randomNumber;
  currentQuestionIndex++;
  document.getElementById("answers").innerHTML = `
            <button class="answer" onclick="filterGenerationGrad(${randomNumber})">Ya</button>
            <button class="answer" onclick="filterGenerationGrad()">Tidak</button>
        `;
  showPossibleMembers();
}
function filterGenerationGrad(generation) {
  if (generation) {
    currentGeneration = generation;
    filteredMembers = filteredMembers.filter(
      (member) =>
        member.generation === currentGeneration && member.graduated === true
    );
    randomQuestionDiv();
    showPossibleMembers();
  } else {
    askGenGrad();
  }
  showPossibleMembers();
}
function filterGenerationAll(generation) {
  if (generation) {
    currentGeneration = generation;
    filteredMembers = filteredMembers.filter(
      (member) =>
        member.generation === currentGeneration && member.graduated === false
    );
    randomQuestionDiv();
    showPossibleMembers();
  } else {
    askGenAll();
  }
  showPossibleMembers();
}

function askGenerationQuestion() {
  document.getElementById("question").innerText =
    "Saat ini member Trainee hanya Gen 12 dan Gen 13, Dia berada di mana?";
  currentQuestionIndex++;
  // Wait for "yes" or "no" answer before filtering generation
  document.getElementById("answers").innerHTML = `
    <button class="answer" onclick="filterGeneration(12)">12</button>
    <button class="answer" onclick="filterGeneration(13)">13</button>`;
  showPossibleMembers();
}

function filterGeneration(generation) {
  currentGeneration = generation;
  filteredMembers = filteredMembers.filter(
    (member) => member.generation === currentGeneration
  );
  showPossibleMembers();
  randomQuestionDiv();
}

function askInitialLetter() {
  const firstLetters = filteredMembers.map((member) =>
    member.name.charAt(0).toUpperCase()
  );
  const uniqueFirstLetters = [...new Set(firstLetters)];
  const randomLetter =
    uniqueFirstLetters[Math.floor(Math.random() * uniqueFirstLetters.length)];

  if (typeof randomLetter === "undefined") {
    document.getElementById(
      "question"
    ).innerText = `That member doesn't found.`;
    document.getElementById("answers").innerHTML = `
            <button class="answer" onclick="filterByLetter('')">Ok</button>
            <button class="answer" onclick="filterByLetter('')">Ok</button>
        `;
  } else {
    if (filteredMembers.length > 1) {
    document.getElementById(
      "question"
    ).innerText = `Apakah Inisialnya ${randomLetter}?`;
    document.getElementById("answers").innerHTML = `
            <button class="answer" onclick="filterByLetter('${randomLetter}')">Ya</button>
            <button class="answer" onclick="filterByLetter('')">Tidak</button>
        `;
    } else {
        showResult(filteredMembers[0]);
    }
  }
}

function filterByLetter(letter) {
  if (letter) {
    filteredMembers = filteredMembers.filter(
      (member) =>
        member.generation === currentGeneration &&
        member.name.charAt(0).toUpperCase() === letter
    );

    if (filteredMembers.length > 1) {
      askSecondLetter(filteredMembers[0].name);
    } else {
      showResult(filteredMembers[0]);
    }
  } else {
    randomQuestionDiv()
    // randomQuestionDiv();
  }
  showPossibleMembers();
}

let currentMemberIndex = 1;
function filterBySecondLetter(secondLetter) {
  if (secondLetter) {
    // Filter the members based on the second letter
    filteredMembers = filteredMembers.filter(
      (member) => member.name.charAt(1).toUpperCase() === secondLetter
    );
    if (filteredMembers.length === 1) {
      showResult(filteredMembers[0]);
      showPossibleMembers();
    } else {
      askSecondLetter(filteredMembers[currentMemberIndex].name);
    }
  } else {
    if (filteredMembers.length > 1) {
      askSecondLetter(filteredMembers[currentMemberIndex].name);
    } else {
      showResult(filteredMembers[0]);
    }
  }
}

function askSecondLetter(memberName) {
  const secondLetter = memberName.charAt(1).toUpperCase(); // Get the second letter
  const firstLetter = memberName.charAt(0).toUpperCase(); // Get the first letter
  document.getElementById(
    "question"
  ).innerText = `Apakah habis huruf ${firstLetter} adalah ${secondLetter}? Sehingga menjadi ${firstLetter}${secondLetter}?`;
  document.getElementById("answers").innerHTML = `
        <button class="answer" onclick="filterBySecondLetter('${secondLetter}')">Ya</button>
        <button class="answer" onclick="filterBySecondLetter('')">Tidak</button>
    `;
  currentMemberIndex++;
  if (currentMemberIndex >= filteredMembers.length) {
    currentMemberIndex = 0;
  }
}

function showResult(member) {
  document.getElementById("result").style.display = "block";
  document.getElementById("result-img").src =
    "https://jkt48-member.vercel.app" + member.picture;
  document.getElementById("result-name").innerText = member.name;
  document.getElementById("result-info").innerText = `
  Trainee: ${member.trainee == true ? "Ya" : "Tidak"}
  Generasi: ${member.generation}
  Graduated: ${member.graduated == true ? "Ya" : "Tidak"}
  `;
  document.getElementById("answers").style.display = "none";
}

function calculatePercentage(filteredMembers) {
    const length = filteredMembers.length;
    if (length >= 180) {
        return 0;
    }
    if (length === 0) {
        return 100;
    }
    let percentage = Math.max(100 / length, 1);
    return parseFloat(percentage.toFixed(1));
}



function showPossibleMembers() {
  const possibleMembersDiv = document.getElementById("possible-members");
  possibleMembersDiv.innerHTML = "";
  const memberDiv = document.createElement("div");
  // const img = document.createElement('img');
  // img.src = "https://jkt48-member.vercel.app" + member.picture;
  const name = document.createElement("p");

  name.innerText = "Progress: " + calculatePercentage(filteredMembers) + "%";
  // memberDiv.appendChild(img);
  memberDiv.appendChild(name);
  possibleMembersDiv.appendChild(memberDiv);
  /*filteredMembers.forEach(member => {
            const memberDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = "https://jkt48-member.vercel.app" + member.picture;
            const name = document.createElement('p');
            name.innerText = member.name;
            memberDiv.appendChild(img);
            memberDiv.appendChild(name);
            possibleMembersDiv.appendChild(memberDiv);
    });*/
}

loadData();
