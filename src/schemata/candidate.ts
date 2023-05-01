import { Schema, model, models } from "mongoose";

export const candidate = new Schema<ICandidate>({
  electionId: {
    type: String,
    required: true,
  },
  candidateId: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export const Candidate = model<ICandidate>("Candidate", models.Candidate ? undefined : candidate);

export interface ICandidate {
  electionId: string;
  candidateId: string;
}
