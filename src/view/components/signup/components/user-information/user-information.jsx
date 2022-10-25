import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { informationSchema } from "./data.mock";
import { addVisiblePropertyInQuestions, toggleAnswerCta } from "./helper";
import { CButton } from "../../../../shared/c-button";
const { Title } = Typography;

export const UserInformation = () => {
  const [signupQuestionsWithUiProperty, setSignupQuestionsWithUiProperty] =
    useState();

  useEffect(() => {
    setSignupQuestionsWithUiProperty(
      addVisiblePropertyInQuestions(informationSchema, ["1"])
    );
  }, []);

  const handleAnswerCta = (updateQuestionsToVisibleIds, ctaId, questionId) => {
    const _updatedQuestions = addVisiblePropertyInQuestions(
      signupQuestionsWithUiProperty,
      updateQuestionsToVisibleIds
    );

    setSignupQuestionsWithUiProperty(
      toggleAnswerCta(_updatedQuestions, ctaId, questionId)
    );
  };

  return (
    <div>
      <Title level={5}>User Information</Title>

      {signupQuestionsWithUiProperty?.map((question) => {
        const { question: questionLabel, isVisible } = question;
        if (!isVisible) return;
        return (
          <div key={questionLabel}>
            <Title level={5}>{questionLabel}</Title>
            {question.answerCta.map((cta) => {
              const { label, next, _id, isActive } = cta;
              const handleCta = () => handleAnswerCta(next, _id, question._id);
              return (
                <div key={label}>
                  <CButton
                    text={label}
                    onClick={handleCta}
                    type={isActive && "primary"}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
