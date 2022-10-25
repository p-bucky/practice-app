export const addVisiblePropertyInQuestions = (
  schema,
  updateQuestionsToVisibleIds
) => {
  return schema.map((item) => ({
    ...item,
    isVisible: updateQuestionsToVisibleIds.includes(item._id.toString()),
    answerCta: item.answerCta.map((cta) => ({
      ...cta,
      isActive: cta.isActive ?? false,
    })),
  }));
};

export const toggleAnswerCta = (schema, ctaId, questionId) => {
  return schema.map((item) => {
    if (item._id === questionId) {
      return {
        ...item,
        answerCta: item.answerCta.map((cta) =>
          cta._id === ctaId
            ? { ...cta, isActive: !cta.isActive }
            : { ...cta, isActive: false }
        ),
      };
    } else {
      return { ...item };
    }
  });
};
