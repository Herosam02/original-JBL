import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        mission: './mission.html',
        values: './values.html',
        leadership: './leadership.html',
        history: './history.html',
        certifications: './certifications.html',
        services: './services.html',
        'alt-power': './alt-power.html',
        telecoms: './telecoms.html',
        fibre: './fibre.html',
        bts: './bts.html',
        transmission: './transmission.html',
        energy: './energy.html',
        'network-access': './network-access.html',
        security: './security.html',
        'vertical-transport': './vertical-transport.html',
        products: './products.html',
        projects: './projects.html',
        'project-1': './project-1.html',
        'project-2': './project-2.html',
        'project-3': './project-3.html',
        process: './process.html',
        safety: './safety.html',
        careers: './careers.html',
        contact: './contact.html',
      },
    },
  },
})
