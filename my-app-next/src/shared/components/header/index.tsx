import Link from "next/link";


// criar estrutura de nav
export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" >Home</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};