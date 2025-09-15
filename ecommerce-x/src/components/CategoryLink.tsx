import { IoMdArrowDropright } from "react-icons/io";

const CategoryLink = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => {
    return (
        <li>
            <a href="#" className="flex items-center justify-between px-3 py-4  text-gray-500 border-b border-gray-300">
                <div className="flex items-center space-x-3">
                    <Icon className="text-xl" />
                    <span className="text-sm">{label}</span>
                </div>
                <IoMdArrowDropright />
            </a>
        </li>
    );
};

export { CategoryLink }
