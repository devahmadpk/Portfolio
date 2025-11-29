import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJs, faReact, 
  faNodeJs, faPython, faShopify, faEnvira
} from '@fortawesome/free-brands-svg-icons';

const skills = [
    { icon: faHtml5, color: '#E34F26' },
    { icon: faCss3Alt, color: '#1572B6' },
    { icon: faJs, color: '#F7DF1E' },
    { icon: faReact, color: '#61DAFB' },
    { icon: faNodeJs, color: '#339933' },
    { icon: faPython, color: '#3776AB' },
    { icon: faShopify, color: '#96bf48' },
    { icon: faEnvira, color: '#47A248' },
];

function IconBar() {
    return (
        <div className="w-full py-6 overflow-hidden">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                {/* List 1 */}
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:[animation-play-state:paused]">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-gray-500 text-5xl transition-colors duration-300" style={{ '--hover-color': skill.color }}>
                            <div className="cursor-pointer hover:text-[var(--hover-color)]">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>
                        </li>
                    ))}
                </ul>
                {/* List 2 (Duplicate) */}
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:[animation-play-state:paused]" aria-hidden="true">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-gray-500 text-5xl transition-colors duration-300" style={{ '--hover-color': skill.color }}>
                            <div className="cursor-pointer hover:text-[var(--hover-color)]">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default IconBar;