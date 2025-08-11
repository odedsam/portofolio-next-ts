import { BG_COLOR } from '@/config';
import Footer from '../Footer';

export default function AppFooter({ loading }: { loading: boolean }) {
  return (
    <footer className={`p-4 footer ${BG_COLOR} text-base-content footer-center`}>
      <div className="card card-sm bg-base-100 shadow-sm">
        <Footer loading={loading} />
      </div>
    </footer>
  );
}
