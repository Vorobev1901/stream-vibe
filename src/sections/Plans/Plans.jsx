import Section from "@/components/Section";
import Grid from '@/components/Grid'
import planGroups from "./planGroups.js";
import PlanCard from "@/components/PlanCard";
import Tabs from "@/components/Tabs";
import './Plans.scss'
import TabsNavigation from "@/components/Tabs/components/index.js";

const Plans = () => {
    const plansId = 'plans-id'
    const tabsTitle = 'Plans tabs'
    const tabsNavigationId = 'plans-tabs-navigation'

    return (
        <Section
            className='plans'
            titleId={plansId}
            title="Choose the plan that's right for you"
            description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            actions={
                <TabsNavigation id={tabsNavigationId} title={tabsTitle} items={planGroups}/>
            }
        >
            <Tabs
                title={tabsTitle}
                navigationTargetElementId={tabsNavigationId}
                items={planGroups.map((planGroup) => ({
                    title: planGroup.title,
                    isActive: planGroup.isActive,
                    children: (
                        <Grid columns={3}>
                            {
                                planGroup.items.map((planItem, index) => {
                                    return (
                                        <PlanCard {...planItem} key={index}/>
                                    )
                                })
                            }
                        </Grid>
                    )
                }))}
            />
        </Section>
    )
}

export default Plans;