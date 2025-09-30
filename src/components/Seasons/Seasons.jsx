import './Seasons.scss'
import AccordionGroup from "@/components/AccordionGroup/index.js";
import seasonsItems from "@/components/Seasons/seasonsItems.js";
import Accordion from "@/components/Accordion/index.js";
import EpisodeCard from "@/components/EpisodeCard/index.js";

const Seasons = () => {

    return (
        <AccordionGroup
            className={'seasons'}
            mode={'dark'}
            isOrderList={false}
        >
            {seasonsItems.map(({title, subtitle, episodes}, index) => (
                <Accordion
                    title={title}
                    subtitle={subtitle}
                    titleLevelClassName={'h4'}
                    id={`seasons-${index}`}
                    name={'seasons'}
                    isOpen={index === 0}
                    isArrowButton
                    key={index}
                >
                    <ul className="seasons__list">
                        {episodes.map((episode, index) => (
                            <li className="seasons__item" key={index}>
                                <EpisodeCard
                                    {...episode}
                                />
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </AccordionGroup>
    )
}

export default Seasons