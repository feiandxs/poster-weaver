import { LeftSidePanel } from '@/components/left-side-panel';
import { MainComponent } from '@/components/main';
import { RightPropertyPanel } from '@/components/right-property-panel';

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-row justify-start items-start'>
      <LeftSidePanel />
      <MainComponent />
      <RightPropertyPanel />
    </main>
  );
}
