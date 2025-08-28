type CustomData =m {
    nama: string;
}

type Score = Record<"math" | "english" | "science", number>;
type Score = {
    math: number,
    english: number,
    science: number,

}

const score: Score { math: 20, english: 30, science: 20};