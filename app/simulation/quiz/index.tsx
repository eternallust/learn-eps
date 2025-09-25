import QuizScreen from "@screens/quiz/QuizScreen";

// Data soal simulasi
const quizData = [
  {
    id: 1,
    question: "안녕하세요의 뜻은 무엇입니까?",
    options: [
      "Selamat pagi",
      "Selamat tinggal",
      "Halo/Selamat",
      "Terima kasih",
    ],
    correctAnswer: 2, // indeks dari array options (0-based)
    type: "text",
  },
  {
    id: 2,
    question: "감사합니다의 뜻은 무엇입니까?",
    options: [
      "Selamat pagi",
      "Selamat tinggal",
      "Halo/Selamat",
      "Terima kasih",
    ],
    correctAnswer: 3,
    type: "text",
  },
  {
    id: 3,
    question: "Gambar berikut menunjukkan apa dalam bahasa Korea?",
    imageSource: require("../../../src/assets/images/greeting.svg"),
    options: ["안녕하세요", "감사합니다", "죄송합니다", "어디에요"],
    correctAnswer: 0,
    type: "image",
  },
  {
    id: 4,
    question: "Gambar berikut menunjukkan apa dalam bahasa Korea?",
    imageSource: require("../../../src/assets/images/sorry.svg"),
    options: ["안녕하세요", "감사합니다", "죄송합니다", "어디에요"],
    correctAnswer: 2,
    type: "image",
  },
  {
    id: 5,
    question: "맛있어요의 뜻은 무엇입니까?",
    options: ["Enak/Lezat", "Mahal", "Murah", "Tidak enak"],
    correctAnswer: 0,
    type: "text",
  },
];

export default function Index() {
  return (
    <QuizScreen
      quizData={quizData}
      title="Simulasi Quiz"
      timePerQuestion={30}
    />
  );
}
