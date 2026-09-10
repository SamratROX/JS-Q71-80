# JavaScript Logical Thinking & Conditional Workflows — Q71–80

A hands-on implementation suite for Day 12 of the coding challenge (JS Day 6). This repository focuses on fundamental decision-making structures, multi-variable relational logic, compound condition checks, type conversions for length inspection, and mathematical percentage algorithms.

---

## 🚀 Key Learnings & Core Concepts

### 1. Relational & Numeric Evaluations
- **Maximum Value Identification:** Used `Math.max()` to determine the higher numeric value between variables.
- **Range Validation:** Implemented logical AND (`&&`) operators to verify whether a number falls within specific boundary limits ($10 < x < 50$).
- **Multiples & Divisibility:** Applied the modulo operator (`%`) to evaluate divisibility rules for single factors (e.g., multiples of 10) as well as compound conditions (divisibility by 2, 3, or both).

### 2. String & Input Validation Logic
- **Explicit Type Conversion for Length Checks:** Converted numeric values into strings using `String()` to safely check length criteria (e.g., password validation for $length > 8$).
- **Flag-Based State Verification:** Evaluated boolean flags to confirm operational states like product availability (`inStock`).

### 3. Compound Conditions & Control Flow
- **Multi-Factor Rules:** Evaluated dual-prerequisite conditions combining age thresholds and boolean flags for eligibility checks (`age >= 18 && hasLicense`).
- **Time-Based Branching:** Constructed multi-tier `if...else if...else` structures to classify time periods and output contextual greetings.

### 4. Mathematical & Financial Calculations
- **Discount Deduction:** Computed net payable amounts by calculating percentage deductions ($Amount - \frac{Amount \times Discount}{100}$).
- **Tax Inclusion (GST):** Calculated total billing sums after applying percentage-based Goods and Services Tax additions.