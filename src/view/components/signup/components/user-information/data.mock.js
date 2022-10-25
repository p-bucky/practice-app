export const informationSchema = [
  {
    _id: 1,
    question: "What is your age (years) ?",
    answerCta: [
      { _id: 1, label: "More than 18", type: "cta", next: ["1", "2"] },
      { _id: 2, label: "Less than 18", type: "cta", next: ["1", "4"] },
    ],
  },
  {
    _id: 2,
    question: "Who will use Junio card ?",
    answerCta: [
      { _id: 1, label: "I'll use", type: "cta", next: ["1", "2", "3"] },
      {
        _id: 2,
        label: "Child in my family",
        type: "cta",
        next: ["1", "2", "success"],
      },
    ],
  },
  {
    _id: 3,
    question: "Whose pan card you'll give ?",
    answerCta: [
      {
        _id: 1,
        label: "My PAN",
        type: "cta",
        next: ["1", "2", "3", "success"],
      },
      {
        _id: 2,
        label: "Parent's PAN",
        type: "cta",
        next: ["1", "2", "3", "success"],
      },
      {
        _id: 3,
        label: "Uncle/Aunt's PAN",
        type: "cta",
        next: ["1", "2", "3", "success"],
      },
    ],
  },
  {
    _id: 4,
    question: "Whose pan card you'll give ?",
    answerCta: [
      {
        _id: 1,
        label: "Parent's PAN",
        type: "cta",
        next: ["1", "4", "success"],
      },
      {
        _id: 2,
        label: "Uncle/Aunt's PAN",
        type: "cta",
        next: ["1", "4", "success"],
      },
    ],
  },
];
