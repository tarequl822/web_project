import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main className="min-h-screen bg-page px-4 py-10 text-t-primary sm:px-6 lg:px-8">
			<div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center">
				<header className="flex items-center justify-between border-b border-border pb-6">
					<div>
						<p className="text-sm font-semibold uppercase tracking-widest text-primary">
							Your Application
						</p>
						<h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
							Welcome home
						</h1>
					</div>
					<Link
						to="/login"
						className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-t-primary transition hover:border-primary hover:text-primary"
					>
						Sign out
					</Link>
				</header>

				<section className="grid gap-8 py-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
					<div>
						<p className="max-w-xl text-lg leading-8 text-t-secondary">
							You are signed in to the frontend preview. This is a simple starting
							point for your dashboard while the backend is being prepared.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								to="/register"
								className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary"
							>
								Manage account
							</Link>
							<span className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-t-secondary">
								Frontend preview
							</span>
						</div>
					</div>

					<div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
						<p className="text-sm font-semibold text-primary">Getting started</p>
						<h2 className="mt-2 text-2xl font-bold">Your space is ready</h2>
						<p className="mt-3 text-sm leading-6 text-t-secondary">
							Add your real content, navigation, and API data here when the
							backend is connected.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
