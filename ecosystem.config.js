module.exports = {
	apps: [
		{
			cwd: './',
			name: 'azalianow-prod',
			script: 'npm',
			args: 'run start',
			exec_mode: 'cluster',
			instance_var: 'INSTANCE_ID',
			instances: 1,
			autorestart: true,
			watch: false,
			ignore_watch: ['node_modules', 'logs'],
			max_memory_restart: '1G',
			merge_logs: true,
			output: './logs/access.log',
			error: './logs/error.log',
			kill_timeout: 1600,
			restart_delay: 4000,
		},
	],
	deploy: {
		production: {
			user: 'root',
			host: '90.156.229.78',
			key: '~/.ssh/id_rsa',
			ref: 'origin/main',
			repo: 'git@github.com:andreevova/azalianow-test.git',
			path: '/var/www/azalianow',
			'post-deploy': 'yarn && yarn prod-deploy',
		},
	},
}
