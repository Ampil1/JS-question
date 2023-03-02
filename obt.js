ar1 = [{
    id: 2,
    name: "a"
  },
  {
    id: 2,
    name: "b"
  },
  {
    id: 18,
    name: "c"
  },
  {
    id: 16,
    name: 'name'
  }
]

ar2 = [{
    id: 2,
    name: "c"
  },
  {
    id: 12,
    name: 'F'
  }
]
let createArray=[];
let updateArray=[];
for (let i = 0; i < ar1.length; i++) {
  let flag = false;
  for (let j = 0; j < ar2.length; j++) {
    if (ar1[i].id == ar2[j].id) {
      flag = true
      data = ar1[j];
    }

  }
  if (flag) {
     updateArray.push(data)
  } else {
    createArray.push(ar1[i])
  }
}
console.log("update----",updateArray)
console.log("create------",createArray)

// UPDATE "IDTC_DEV"."TEST_CASE_STEP" AS idtc SET TEST_STEP_ID = rowseq.row From  "IDTC_DEV"."TEST_CASE_STEP" AS idtc, (SELECT id, row_number() OVER ( PARTITION BY TEST_CASE_HEADER_ID ) AS row FROM "IDTC_DEV"."TEST_CASE_STEP"  ) AS rowseq WHERE idtc.id = rowseq.id
  