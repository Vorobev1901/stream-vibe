import './Devices.scss'
import Section from '@/components/Section'
import DeviceCard from "@/components/DeviceCard";
import Grid from '@/components/Grid';
import devicesItems from './deviceItems.js'

const Devices = () => {
    const titleId = 'devices-title';

    return (
        <Section
            className={'devices'}
            titleId={titleId}
            title={'We Provide you streaming experience across various devices.'}
            description={'With StreamVibe, you can enjoy your favorite movieItems and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'}
            isActionsHiddenOnMobile
        >
            <Grid
                columns={3}
            >
                { devicesItems.map((device, index) => (
                    <DeviceCard {...device} key={index} />
                ))}
            </Grid>
        </Section>
    )
}

export default Devices;