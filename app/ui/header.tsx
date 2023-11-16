import classes from "@/app/dashboard/dashboard.module.css";
import Link from "next/link";

export default function Layout() {
  return (
    <div className={classes.newDashboard}>
      <div className={classes.header}>
        <h2>MultiBagg</h2>

        <button>
          <Link href="/login">Login</Link>
        </button>
      </div>
      </div>
  );
}
