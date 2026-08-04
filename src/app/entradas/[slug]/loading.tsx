import { PostDetailSkeleton, SidebarSkeleton } from "@/components/Skeletons";

export default function LoadingPost() {
  return (
    <div className="container page">
      <div className="layout">
        <PostDetailSkeleton />
        <SidebarSkeleton />
      </div>
    </div>
  );
}
