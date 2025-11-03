import { motion } from 'motion/react';

export const Background = () => {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      <div
        className={
          'absolute inset-0 bg-gradient-to-br ' +
          'from-slate-50 via-blue-50 to-indigo-100 ' +
          'dark:from-gray-950 dark:via-slate-900 ' +
          'dark:to-indigo-950'
        }
      />

      <motion.div
        className={
          'absolute -top-40 -left-40 w-[500px] h-[500px] ' +
          'rounded-full bg-gradient-to-br ' +
          'from-blue-400/30 to-cyan-400/30 ' +
          'dark:from-blue-600/20 dark:to-cyan-600/20 blur-3xl'
        }
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className={
          'absolute top-1/4 -right-40 w-[600px] h-[600px] ' +
          'rounded-full bg-gradient-to-br ' +
          'from-indigo-400/25 to-purple-400/25 ' +
          'dark:from-indigo-600/15 dark:to-purple-600/15 ' +
          'blur-3xl'
        }
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className={
          'absolute bottom-20 left-1/4 w-[450px] h-[450px] ' +
          'rounded-full bg-gradient-to-br ' +
          'from-pink-400/20 to-rose-400/20 ' +
          'dark:from-pink-600/10 dark:to-rose-600/10 blur-3xl'
        }
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className={
          'absolute -bottom-40 right-1/3 w-[550px] h-[550px] ' +
          'rounded-full bg-gradient-to-br ' +
          'from-violet-400/25 to-fuchsia-400/25 ' +
          'dark:from-violet-600/15 dark:to-fuchsia-600/15 ' +
          'blur-3xl'
        }
        animate={{
          x: [0, 70, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div
        className={
          'absolute inset-0 ' +
          'bg-[linear-gradient(to_right,#80808008_1px,' +
          'transparent_1px),' +
          'linear-gradient(to_bottom,#80808008_1px,' +
          'transparent_1px)] bg-[size:64px_64px]'
        }
      />
    </div>
  );
};
