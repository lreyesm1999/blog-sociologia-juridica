import {
  PageHeaderSkeleton,
  PostGridSkeleton,
  SidebarSkeleton,
} from "@/components/Skeletons";

export default function LoadingEtiqueta() {
  return (
    <div className="container page">
      <PageHeaderSkeleton />
      <div className="layout">
        <PostGridSkeleton count={4} />
        <SidebarSkeleton />
      </div>
    </div>
  );
}
