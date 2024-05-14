import BRIWorkbenchImage from '@/assets/img/bri_workbench.jpeg';
import TrustLinkImage from '@/assets/img/trustlink.png';
import DemfasnaImage from '@/assets/img/demfasna.png';
import SMPITMadaniImage from '@/assets/img/smp_it_madani.png';
import { StaticImageData } from 'next/image';

type PortfolioType = {
  id: number;
  title: string;
  image: StaticImageData;
};

export const portfolio: PortfolioType[] = [
  {
    id: 1,
    title: 'BRI Workbench',
    image: BRIWorkbenchImage,
  },
  {
    id: 2,
    title: 'TrustLink',
    image: TrustLinkImage,
  },
  {
    id: 3,
    title: 'Demfasna',
    image: DemfasnaImage,
  },
  {
    id: 4,
    title: 'SMP IT Madani',
    image: SMPITMadaniImage,
  },
];
