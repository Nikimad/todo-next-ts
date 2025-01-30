import Banner, { type BannerProps } from "../Banner/Banner";
import Button from "../Button";
import Spinner from "../Spinner";
import s from "./ErrorBanner.module.css";

interface ErrorBannerProps extends BannerProps {
  onReset: () => void;
  isLoading: boolean;
}

const ErrorBanner = ({ message, onReset, isLoading }: ErrorBannerProps) => (
  <Banner message={message}>
    {isLoading && (
      <div className={s.banner__spinner}>
        <Spinner />
      </div>
    )}
    <Button onClick={onReset}>Try again</Button>
  </Banner>
);

export default ErrorBanner;
