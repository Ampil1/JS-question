let groupByInput = [ 
    { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
    { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
    { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
    { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
    { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
    { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
    { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
    { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
]

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

// groupBy(pets, pet => pet.type);
let result = groupBy( groupByInput,id => id.Step );
console.log(result)
/* 
groupByOutput = {
    "Step 1": [
        {
            "Phase": "Phase 1",
            "Step": "Step 1",
            "Task": "Task 1",
            "Value": "5"
        },
        {
            "Phase": "Phase 1",
            "Step": "Step 1",
            "Task": "Task 2",
            "Value": "10"
        },
        {
            "Phase": "Phase 2",
            "Step": "Step 1",
            "Task": "Task 1",
            "Value": "25"
        },
        {
            "Phase": "Phase 2",
            "Step": "Step 1",
            "Task": "Task 2",
            "Value": "30"
        }
    ],
    "Step 2": [
        {
            "Phase": "Phase 1",
            "Step": "Step 2",
            "Task": "Task 1",
            "Value": "15"
        },
        {
            "Phase": "Phase 1",
            "Step": "Step 2",
            "Task": "Task 2",
            "Value": "20"
        },
        {
            "Phase": "Phase 2",
            "Step": "Step 2",
            "Task": "Task 1",
            "Value": "35"
        },
        {
            "Phase": "Phase 2",
            "Step": "Step 2",
            "Task": "Task 2",
            "Value": "40"
        }
    ]
} */