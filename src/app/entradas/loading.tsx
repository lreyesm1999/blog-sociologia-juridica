import {
  PageHeaderSkeleton,
  PostGridSkeleton,
  SidebarSkeleton,
} from "@/components/Skeletons";

export default function LoadingEntradas() {
  return (
    <div className="container page">
      <PageHeaderSkeleton />
      <div className="layout">
        <PostGridSkeleton count={6} />
        <SidebarSkeleton />
      </div>
    </div>
  );
}
