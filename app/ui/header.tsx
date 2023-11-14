import classes from "@/app/dashboard/dashboard.module.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.newDashboard}>
      <div className={classes.header}>
        <h2>MultiBagg</h2>

        <button>
          <Link href="/login">Login</Link>
        </button>
      </div>

        {/* Content */}
        <div className={classes.right_container}>{children}</div>
      </div>
  );
}
