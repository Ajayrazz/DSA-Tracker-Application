const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Problem = require('./models/Problem');

// Load env vars
dotenv.config();

// Define dummy data matching the Problem schema
const problems = [
    { title: 'Two Sum', topic: 'Arrays', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/two-sum/' },
    { title: 'Best Time to Buy and Sell Stock', topic: 'Arrays', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    { title: 'Contains Duplicate', topic: 'Arrays', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/contains-duplicate/' },
    { title: 'Maximum Subarray', topic: 'Arrays', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/maximum-subarray/' },
    { title: 'Product of Array Except Self', topic: 'Arrays', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/product-of-array-except-self/' },

    { title: 'Longest Substring Without Repeating Characters', topic: 'Strings', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    { title: 'Valid Anagram', topic: 'Strings', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/valid-anagram/' },
    { title: 'Group Anagrams', topic: 'Strings', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/group-anagrams/' },
    { title: 'Longest Palindromic Substring', topic: 'Strings', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/longest-palindromic-substring/' },
    { title: 'Valid Parentheses', topic: 'Strings', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/valid-parentheses/' },

    { title: 'Merge Two Sorted Lists', topic: 'Linked List', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
    { title: 'Reverse Linked List', topic: 'Linked List', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/reverse-linked-list/' },
    { title: 'Linked List Cycle', topic: 'Linked List', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/linked-list-cycle/' },
    { title: 'Remove Nth Node From End of List', topic: 'Linked List', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
    { title: 'LRU Cache', topic: 'Linked List', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/lru-cache/' },

    { title: 'Binary Tree Inorder Traversal', topic: 'Trees', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
    { title: 'Maximum Depth of Binary Tree', topic: 'Trees', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
    { title: 'Same Tree', topic: 'Trees', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/same-tree/' },
    { title: 'Binary Tree Level Order Traversal', topic: 'Trees', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
    { title: 'Lowest Common Ancestor of BST', topic: 'Trees', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },

    { title: 'Number of Islands', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/number-of-islands/' },
    { title: 'Clone Graph', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/clone-graph/' },
    { title: 'Course Schedule', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/course-schedule/' },
    { title: 'Course Schedule II', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/course-schedule-ii/' },
    { title: 'Network Delay Time', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/network-delay-time/' },

    { title: 'Climbing Stairs', topic: 'Dynamic Programming', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/climbing-stairs/' },
    { title: 'House Robber', topic: 'Dynamic Programming', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/house-robber/' },
    { title: 'Longest Increasing Subsequence', topic: 'Dynamic Programming', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
    { title: 'Coin Change', topic: 'Dynamic Programming', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/coin-change/' },
    { title: 'Edit Distance', topic: 'Dynamic Programming', difficulty: 'Hard', platformUrl: 'https://leetcode.com/problems/edit-distance/' },

    { title: 'Permutations', topic: 'Backtracking', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/permutations/' },
    { title: 'Subsets', topic: 'Backtracking', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/subsets/' },
    { title: 'Combination Sum', topic: 'Backtracking', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/combination-sum/' },
    { title: 'N-Queens', topic: 'Backtracking', difficulty: 'Hard', platformUrl: 'https://leetcode.com/problems/n-queens/' },
    { title: 'Sudoku Solver', topic: 'Backtracking', difficulty: 'Hard', platformUrl: 'https://leetcode.com/problems/sudoku-solver/' },

    { title: 'Search in Rotated Sorted Array', topic: 'Binary Search', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
    { title: 'Find Minimum in Rotated Sorted Array', topic: 'Binary Search', difficulty: 'Medium', platformUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
    { title: 'Binary Search', topic: 'Binary Search', difficulty: 'Easy', platformUrl: 'https://leetcode.com/problems/binary-search/' },
    { title: 'Median of Two Sorted Arrays', topic: 'Binary Search', difficulty: 'Hard', platformUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },

    { title: 'Watermelon', topic: 'Math', difficulty: 'Easy', platformUrl: 'https://codeforces.com/problemset/problem/4/A' },
    { title: 'Beautiful Matrix', topic: 'Math', difficulty: 'Easy', platformUrl: 'https://codeforces.com/problemset/problem/263/A' },
    { title: 'Way Too Long Words', topic: 'Strings', difficulty: 'Easy', platformUrl: 'https://codeforces.com/problemset/problem/71/A' },

    { title: 'Detect Cycle in a Directed Graph', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://www.geeksforgeeks.org/detect-cycle-in-a-graph/' },
    { title: 'Topological Sort', topic: 'Graphs', difficulty: 'Medium', platformUrl: 'https://www.geeksforgeeks.org/topological-sorting/' },
    { title: 'Longest Common Subsequence', topic: 'Dynamic Programming', difficulty: 'Medium', platformUrl: 'https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/' },
    { title: '0-1 Knapsack Problem', topic: 'Dynamic Programming', difficulty: 'Medium', platformUrl: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/' }
];

// Async function to import data
const importData = async () => {
    try {
        // Connect to database
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected for Seeding`);

        // Clear existing problems to prevent duplicates
        await Problem.deleteMany();
        console.log('Existing problems cleared.');

        // Insert dummy problems
        await Problem.insertMany(problems);
        console.log('Data Imported!');

        // Gracefully exit
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error.message}`);
        process.exit(1);
    }
};

// Execute the import
importData();
