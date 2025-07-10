import { skeleton } from '@/config';

const Footer = ({ loading }: { loading: boolean }) => {
  return (
    <div className="card-body text-center text-sm text-muted-foreground">
      {loading ? (
        skeleton({ widthCls: 'w-52', heightCls: 'h-6' })
      ) : (
        <p>
          Made with <span className="text-red-500">♥</span> by{' '}
          <a
            href="https://coded-solution.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors">
            Oded Samuel
          </a>{' '}
          – {new Date().getFullYear()}
        </p>
      )}
    </div>
  );
};

export default Footer;
