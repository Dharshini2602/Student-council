export type CouncilRoleCategory =
  | 'Executive'
  | 'Secretariat'
  | 'Department'
  | 'Cultural & Technical'
  | 'Welfare';

export interface CouncilMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  year?: string;
  photograph: string;
  category: CouncilRoleCategory;
  bio?: string;
  email?: string;
  profileLink?: string;
  isPlaceholder?: boolean;
}
