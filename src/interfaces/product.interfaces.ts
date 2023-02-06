import { Props } from "../components/ProductCard";
import { Props as PropsProductButtons } from "../components/ProductButtons";

export interface Product {
    id: string;
    title?: string;
    img?: string;
  }
  
export interface ProductBtnProps {
    counter: number;
    increaseBy: (value: number) => void;
  }
  
export interface ProductContextProps {
    counter: number;
    increaseBy:(value: number) => void;
    product: Product;
    maxCount?: number;
  }

  export interface ProductCardHOCProps {
    ({ children, product }: Props) : JSX.Element,
    Title: (Props: { title?: string, className?: string }) => JSX.Element,
    Image: (Props: { img?: string, className?: string }) => JSX.Element,
    Buttons: (Props: PropsProductButtons) => JSX.Element
  }

  export interface OnChangeArgs {
    product: Product;
    count: number;
  }

  export interface ProductInCart extends Product {
    count: number
  }

  export interface InitialValues {
    count?: number;
    maxCount?: number;
  }

  export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;

  }
  