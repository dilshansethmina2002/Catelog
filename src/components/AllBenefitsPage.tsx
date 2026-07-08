import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BenefitsSection } from './BenefitsSection';
import spicesData from '../data/spices.json';

const spiceIds = new Set(spicesData.map((s) => s.id));

export default function AllBenefitsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const detailPath = id && spiceIds.has(id) ? 'spice' : 'product';

  return (
    <div className="w-full bg-emerald-950 pt-[80px] lg:pt-[100px]">
      <div className="container mx-auto px-4 sm:px-6 pt-8">
        <button
          onClick={() => navigate(`/${detailPath}/${id}`)}
          aria-label="Back"
          className="inline-flex items-center gap-2 text-emerald-100/70 hover:text-amber-400 transition-colors duration-200 text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
      </div>
      <BenefitsSection showAll />
    </div>
  );
}
