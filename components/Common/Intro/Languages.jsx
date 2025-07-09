import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    // Pour les langues avec animation comme avant
    const [urdu, setUrdu] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (english < 50) {  // B1 ≈ 65%
                setEnglish(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [urdu, english])

    // Niveau pour d'autres langues fixes (sans animation)
    const arabicLevel = 85;   // C1 ≈ 85%
    const frenchLevel = 75;   // B2 ≈ 75%

    return (
        <div className="flex flex-col space-y-6 pt-6">
            <span className='text-Snow text-sm font-bold'>Languages</span>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center gap-y-2">
                    <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                    <span className='text-xs font-bold text-Snow'>English (B1)</span>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <Progress strokeColor="#1fdf64" type="circle" percent={frenchLevel} size={75} />
                    <span className='text-xs font-bold text-Snow'>Français (B2)</span>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <Progress strokeColor="#1fdf64" type="circle" percent={arabicLevel} size={75} />
                    <span className='text-xs font-bold text-Snow'>Arabe (C1)</span>
                </div>
            </div>
        </div>
    )
}

export default Languages
