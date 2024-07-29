import { Inter } from 'next/font/google';
import cn from 'classnames';
const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return <div className={cn(inter.className, 'text-gray-700')}>{children}</div>;
};

export default RootLayout;
