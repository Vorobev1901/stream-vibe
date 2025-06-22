import Section from "@/components/Section";
import Button from "@/components/Button/index.js";
import Accordion from "@/components/Accordion";
import AccordionGroup from "@/components/AccordionGroup";
import questionItems from './questionItems.js'

const Questions = () => {
    const titleId = 'questions-title'

    return (
        <Section
            className={'questions'}
            titleId={titleId}
            title={'Frequently Asked Questions'}
            description={'Got questions? We\'ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.'}
            isActionsHiddenOnMobile={false}
            actions={
                <Button
                    className={'questions__button'}
                    href={'/support'}
                    label={'Ask a Question'}
                />
            }
        >
            <AccordionGroup
                isOrderList
                columns={2}
            >
                {
                    questionItems.map((question, index) => (
                        <Accordion
                            title={question}
                            id={`question-${index}`}
                            name={'questions'}
                            isOpen={index === 0}
                            key={index}
                        >
                            <p>
                                StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                            </p>
                        </Accordion>
                    ))
                }
            </AccordionGroup>
        </Section>
    )
}

export default Questions;