# Leetcode Typescript

This repository contains a collection of Leetcode problems solved using TypeScript. The goal is to practice algorithmic challenges while improving TypeScript skills.

## Features
- Solve Leetcode problems using TypeScript.
- Use `ts-node-dev` for efficient TypeScript execution and development.
- A modular structure with separate directories for easy management of problems.
- Supports running individual problem files via `npm run exec`.

## Getting Started

To get started with this project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/AhmedMahmoud929/leetcode-typescript.git
cd leetcode-typescript
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Running a problem

You can run any TypeScript file (problem solution) using the `exec` script. Just pass the path of the file you want to execute.

For example, to run the `two-sum.ts` problem in the `problems/easy` directory:

```bash
npm run exec -- ./problems/easy/two-sum.ts
```

### 4. Add your own problems

To add a new problem, simply create a new TypeScript file under the appropriate category (`easy`, `medium`, `hard`) in the `problems` directory. Then, you can run it using the `npm run exec` command.

## Scripts

- `npm run exec`: Executes a TypeScript file using `ts-node-dev`.
- `npm run test`: Placeholder for future tests (currently not implemented).

## Dependencies

- `ts-node-dev`: Used for running and developing TypeScript files with automatic reloading.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

Created by [AhmedMahmoud929](https://github.com/AhmedMahmoud929).