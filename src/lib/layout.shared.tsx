import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
	user: "deniz-blue",
	repo: "atproto-wiki",
	branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: 'ATProto Wiki',
		},
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
	};
}
