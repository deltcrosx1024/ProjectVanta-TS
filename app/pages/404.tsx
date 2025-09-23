import FuzzyText from '@/app/components/fuzzytext';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="text-6xl font-bold mb-4">
                <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true} >404</FuzzyText>
            </div>
            <div className="text-xl">
                <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>Page Not Found</FuzzyText>
            </div>
            
        </div>
    );
}