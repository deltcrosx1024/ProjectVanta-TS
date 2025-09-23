import Prism from './prism';

export default function BackgroundPrism() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <Prism
            animationType="hover"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
            />
        </div>
    );
}