css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy: #1B2A4A;
  --light-blue: #6BA3D6;
  --soft-blue: #A8CBE8;
  --cream: #F5F7FA;
  --white: #FFFFFF;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--navy);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

.font-display {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 216 46% 20%;
    --card: 0 0% 100%;
    --card-foreground: 216 46% 20%;
    --popover: 0 0% 100%;
    --popover-foreground: 216 46% 20%;
    --primary: 213 50% 63%;
    --primary-foreground: 0 0% 100%;
    --secondary: 216 46% 20%;
    --secondary-foreground: 0 0% 100%;
    --muted: 214 32% 96%;
    --muted-foreground: 216 20% 46%;
    --accent: 214 32% 96%;
    --accent-foreground: 216 46% 20%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 213 50% 63%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--cream);
}
::-webkit-scrollbar-thumb {
  background: var(--soft-blue);
  border-radius: 3px;
}
