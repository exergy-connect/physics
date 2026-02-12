// Auto-generated file - do not edit manually
const consolidatedModel = {
  "$schema": "http://json-schema.org/draft-2020-12/schema",
  "title": "Consolidated Data Model",
  "description": "Consolidated entity schemas from data model files",
  "$defs": {
    "assumption": {
      "type": "object",
      "properties": {
        "assumption_id": {
          "type": "string",
          "description": "Unique identifier for the assumption"
        },
        "theory_id": {
          "type": "string",
          "description": "Reference to the parent theory"
        },
        "statement": {
          "type": "string",
          "description": "The assumption statement or description (e.g., 'spacetime is a 4D manifold', 'no external forces act on the system')"
        },
        "rationale": {
          "type": "string",
          "description": "Explanation of why this assumption is made, its justification, or the context in which it applies"
        }
      },
      "required": [
        "assumption_id",
        "theory_id",
        "statement"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "claim": {
      "type": "object",
      "properties": {
        "claim_id": {
          "type": "string",
          "description": "Unique identifier for the claim"
        },
        "theory_id": {
          "type": "string",
          "description": "Reference to the parent theory"
        },
        "statement": {
          "type": "string",
          "description": "The claim or consequence statement"
        },
        "status": {
          "type": "string",
          "description": "Status of the claim: theoretical (not yet tested), verified (confirmed by experiment), falsified (contradicted by evidence), pending_verification (under investigation)",
          "enum": [
            "theoretical",
            "verified",
            "falsified",
            "pending_verification"
          ]
        },
        "verification_year": {
          "type": "integer",
          "description": "Year when the claim was verified or falsified (if applicable)"
        }
      },
      "required": [
        "claim_id",
        "theory_id",
        "statement"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "paper": {
      "type": "object",
      "properties": {
        "paper_id": {
          "type": "string",
          "description": "Unique identifier for the paper (e.g., 'einstein-1915-field-equations')"
        },
        "title": {
          "type": "string",
          "description": "Title of the paper"
        },
        "year": {
          "type": "integer",
          "description": "Year of publication"
        },
        "link": {
          "type": "string",
          "description": "URL or link to the paper (e.g., Wikipedia article, DOI, etc.)"
        },
        "authors": {
          "type": "array",
          "description": "Array of person IDs who authored this paper",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "paper_id",
        "title"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "person": {
      "type": "object",
      "properties": {
        "person_id": {
          "type": "string",
          "description": "Unique identifier for the person (e.g., 'albert-einstein', 'isaac-newton')"
        },
        "name": {
          "type": "string",
          "description": "Full name of the person"
        },
        "birth_year": {
          "type": "integer",
          "description": "Year of birth"
        },
        "death_year": {
          "type": "integer",
          "description": "Year of death (if deceased)"
        },
        "nobel_years": {
          "type": "array",
          "description": "Array of years when this person received Nobel Prizes",
          "items": {
            "type": "integer"
          }
        }
      },
      "required": [
        "person_id",
        "name"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "postulate": {
      "type": "object",
      "properties": {
        "postulate_id": {
          "type": "string",
          "description": "Unique identifier for the postulate"
        },
        "theory_id": {
          "type": "string",
          "description": "Reference to the parent theory"
        },
        "statement": {
          "type": "string",
          "description": "The explicitly stated postulate or principle (e.g., 'Equivalence Principle', 'Einstein Field Equations: G_μν = 8πG/c⁴ T_μν')"
        },
        "formulation_year": {
          "type": "integer",
          "description": "Year when this postulate was formulated (may differ from theory year, as some postulates may predate the full theory)"
        }
      },
      "required": [
        "postulate_id",
        "theory_id",
        "statement"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "prediction": {
      "type": "object",
      "properties": {
        "prediction_id": {
          "type": "string",
          "description": "Unique identifier for the prediction"
        },
        "theory_id": {
          "type": "string",
          "description": "Reference to the parent theory"
        },
        "statement": {
          "type": "string",
          "description": "The testable prediction statement (e.g., 'Moving clocks run slower than stationary clocks', 'Light rays are bent by gravitational fields')"
        },
        "prediction_year": {
          "type": "integer",
          "description": "Year when this prediction was made or published"
        },
        "status": {
          "type": "string",
          "description": "Status of the prediction: pending (not yet tested), verified (confirmed by experiment), falsified (contradicted by evidence), partially_verified (some aspects confirmed)",
          "enum": [
            "pending",
            "verified",
            "falsified",
            "partially_verified"
          ]
        },
        "verification_year": {
          "type": "integer",
          "description": "Year when the prediction was experimentally verified or falsified (if applicable)"
        },
        "verification_method": {
          "type": "string",
          "description": "Description of how the prediction was verified or tested (e.g., 'Hafele-Keating experiment with atomic clocks', 'Gravitational lensing observation')"
        },
        "people": {
          "type": "array",
          "description": "Array of person_ids who made this prediction or were involved in its verification",
          "items": {
            "type": "string"
          }
        },
        "papers": {
          "type": "array",
          "description": "Array of paper_ids related to this prediction (prediction papers, verification papers, etc.)",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "prediction_id",
        "theory_id",
        "statement",
        "prediction_year"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "prize": {
      "type": "object",
      "properties": {
        "prize_id": {
          "type": "string",
          "description": "Unique identifier for the prize (e.g., 'nobel-physics', 'kyoto-basic-sciences')"
        },
        "name": {
          "type": "string",
          "description": "Display name of the prize (e.g., 'Nobel Prize in Physics', 'Kyoto Prize in Basic Sciences')"
        },
        "category": {
          "type": "string",
          "description": "Category or type of prize",
          "enum": [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Nobel Prize in Physiology or Medicine",
            "Nobel Prize in Economic Sciences",
            "Kyoto Prize in Basic Sciences",
            "Other"
          ]
        },
        "description": {
          "type": "string",
          "description": "Description of what the prize recognizes"
        }
      },
      "required": [
        "prize_id",
        "name"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "prize_award": {
      "type": "object",
      "properties": {
        "award_id": {
          "type": "string",
          "description": "Unique identifier for the award (e.g., 'nobel-physics-1965')"
        },
        "prize_id": {
          "type": "string",
          "description": "Reference to the prize being awarded"
        },
        "year": {
          "type": "integer",
          "description": "Year when the prize was awarded"
        },
        "description": {
          "type": "string",
          "description": "Description of why the prize was awarded (e.g., citation text)"
        },
        "people": {
          "type": "array",
          "description": "Array of person_ids who received this award",
          "items": {
            "type": "string"
          }
        },
        "theory_id": {
          "type": "string",
          "description": "Reference to theory for which the prize was awarded (if applicable)"
        }
      },
      "required": [
        "award_id",
        "prize_id",
        "year"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "tag": {
      "type": "object",
      "properties": {
        "tag_id": {
          "type": "string",
          "description": "Unique identifier for the tag (e.g., 'force', 'time', 'exergy')"
        },
        "name": {
          "type": "string",
          "description": "Display name of the tag"
        },
        "explanation": {
          "type": "string",
          "description": "Explanation of what this tag represents and how it relates to theories"
        }
      },
      "required": [
        "tag_id",
        "name"
      ],
      "x-created": 1,
      "x-version": 1
    },
    "theory": {
      "type": "object",
      "properties": {
        "theory_id": {
          "type": "string",
          "description": "Unique identifier for the theory (e.g., 'general-relativity', 'newtons-laws')"
        },
        "name": {
          "type": "string",
          "description": "Display name of the theory (e.g., 'General Relativity', 'Newton's Laws of Motion')"
        },
        "year": {
          "type": "integer",
          "description": "Year when the theory was developed or published"
        },
        "summary": {
          "type": "string",
          "description": "Brief summary or description of the theory"
        },
        "category": {
          "type": "string",
          "description": "Category or field of physics",
          "enum": [
            "Classical Mechanics",
            "Quantum Physics",
            "Relativity",
            "Thermodynamics",
            "Electromagnetism",
            "Particle Physics"
          ]
        },
        "parent_theory_id": {
          "type": "string",
          "description": "Reference to parent theory for hierarchical organization"
        },
        "assumptions": {
          "type": "array",
          "description": "List of assumptions underlying this theory (nested children)",
          "items": {
            "$ref": "#/$defs/assumption"
          }
        },
        "postulates": {
          "type": "array",
          "description": "List of fundamental postulates of this theory (nested children)",
          "items": {
            "$ref": "#/$defs/postulate"
          }
        },
        "claims": {
          "type": "array",
          "description": "List of claims or consequences made by this theory (nested children)",
          "items": {
            "$ref": "#/$defs/claim"
          }
        },
        "predictions": {
          "type": "array",
          "description": "List of testable predictions made by this theory (nested children)",
          "items": {
            "$ref": "#/$defs/prediction"
          }
        },
        "papers": {
          "type": "array",
          "description": "Array of paper IDs referencing key papers related to this theory",
          "items": {
            "type": "string"
          }
        },
        "people": {
          "type": "array",
          "description": "Array of person IDs referencing people associated with this theory",
          "items": {
            "type": "string"
          }
        },
        "tags": {
          "type": "array",
          "description": "Array of tag IDs for categorizing and searching theories",
          "items": {
            "type": "string"
          }
        },
        "nobel_year": {
          "type": "integer",
          "description": "Year when a Nobel Prize was awarded for this theory (if applicable)"
        },
        "children": {
          "type": "array",
          "description": "List of child theories (nested sub-theories)",
          "items": {
            "$ref": "#/$defs/theory"
          }
        }
      },
      "required": [
        "theory_id",
        "name",
        "year"
      ],
      "x-created": 1,
      "x-version": 1
    }
  },
  "type": "object",
  "properties": {
    "assumption": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/assumption"
      }
    },
    "claim": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/claim"
      }
    },
    "paper": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/paper"
      }
    },
    "person": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/person"
      }
    },
    "postulate": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/postulate"
      }
    },
    "prediction": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/prediction"
      }
    },
    "prize": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/prize"
      }
    },
    "prize_award": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/prize_award"
      }
    },
    "tag": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/tag"
      }
    },
    "theory": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/theory"
      }
    }
  },
  "additionalProperties": false
};
